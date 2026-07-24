"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, X, ArrowRight, RotateCcw } from "lucide-react"

type SimulatorStep = {
  id: string
  phase: string
  title: string
  description: string
  choices?: {
    label: string
    value: string
    description?: string
  }[]
  outcome?: {
    type: "success" | "failure" | "neutral"
    message: string
  }
  autoAdvance?: boolean
}

export function ProposalSimulator() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [decisions, setDecisions] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const steps: SimulatorStep[] = [
    {
      id: "start",
      phase: "Phase 0",
      title: "Start: Proposal Ideation",
      description: "You have an idea to improve Solana. What type of proposal is it?",
      choices: [
        {
          label: "Technical Specification",
          value: "technical",
          description: "Code changes, protocol improvements, or technical enhancements",
        },
        {
          label: "Strategic/Economic/Amendment",
          value: "strategic",
          description: "Network parameters, economic policies, or governance changes",
        },
      ],
    },
    {
      id: "proposal-type-result",
      phase: "Phase 0",
      title: "Proposal Type Selected",
      description:
        decisions.start === "technical"
          ? "Your technical proposal will require drafting a SIMD on GitHub with technical peer review."
          : "Your strategic proposal will be drafted as an SGP on GitHub and elevated directly to the governance process.",
      autoAdvance: true,
    },
    {
      id: "systemic-check",
      phase: "Phase 0",
      title: decisions.start === "technical" ? "Change Type Assessment" : "Automatic SGP Process",
      description:
        decisions.start === "technical"
          ? "Is your technical change systemic or contentious enough to require validator voting?"
          : "Your strategic proposal automatically proceeds to the SGP process.",
      choices:
        decisions.start === "technical"
          ? [
              { label: "Yes - Systemic/Contentious", value: "systemic" },
              { label: "No - Standard Change", value: "standard" },
            ]
          : undefined,
      autoAdvance: decisions.start === "strategic",
    },
    {
      id: "technical-fork",
      phase: "Phase 0",
      title: decisions["systemic-check"] === "standard" ? "Standard GitHub Process" : "Elevated to SGP",
      description:
        decisions["systemic-check"] === "standard"
          ? "Your proposal follows the standard GitHub merge and release process. No validator voting required."
          : "Your systemic change is elevated to the SGP process for validator voting.",
      outcome:
        decisions["systemic-check"] === "standard"
          ? {
              type: "success",
              message: "Proposal completed via standard technical review process!",
            }
          : undefined,
      autoAdvance: decisions["systemic-check"] === "systemic" || decisions.start === "strategic",
    },
    {
      id: "find-sponsors",
      phase: "Phase 1",
      title: "Find Validator Sponsors",
      description: "You need to find validator sponsors with at least 15% total stake to create your SGP proposal.",
      choices: [
        { label: "Successfully found sponsors (>15% stake)", value: "found" },
        { label: "Unable to find enough sponsors", value: "not-found" },
      ],
    },
    {
      id: "sponsor-result",
      phase: "Phase 1",
      title: decisions["find-sponsors"] === "found" ? "Sponsors Secured!" : "Insufficient Support",
      description:
        decisions["find-sponsors"] === "found"
          ? "Great! Your validators can now call create_proposal to submit your SGP to the network. With 15% stake backing, your proposal proceeds directly to voting!"
          : "Without validator sponsors representing 15% stake, you cannot proceed. Consider refining your proposal and trying again.",
      outcome:
        decisions["find-sponsors"] === "not-found"
          ? {
              type: "failure",
              message: "Proposal cannot proceed without validator sponsors.",
            }
          : undefined,
      autoAdvance: decisions["find-sponsors"] === "found",
    },
    {
      id: "voting-period",
      phase: "Phase 3",
      title: "Active Voting",
      description:
        "Your SGP is now in ACTIVE state. There's a 10-epoch discussion period, then a 3-epoch voting window. Validators and stakers can cast votes.",
      autoAdvance: true,
    },
    {
      id: "quorum-check",
      phase: "Phase 3",
      title: "Quorum Check",
      description: "After the voting window, we check if quorum (>33% of stake) participated.",
      choices: [
        { label: "Quorum achieved (>33%)", value: "achieved" },
        { label: "Quorum not met", value: "not-met" },
      ],
    },
    {
      id: "quorum-failure-type",
      phase: "Phase 4",
      title: "Quorum Failure: Proposal Type Check",
      description:
        "Your proposal failed to reach quorum (indifference). Was it a Direct SGP (forcing implementation) or a SIMD-based proposal?",
      choices: [
        { label: "Direct SGP", value: "direct" },
        { label: "SIMD-based (No)", value: "simd" },
      ],
    },
    {
      id: "quorum-failure-outcome",
      phase: "Phase 4",
      title:
        decisions["quorum-failure-type"] === "direct" ? "Insufficient Signal" : "Re-convert to SIMD (Optimistic Pass)",
      description:
        decisions["quorum-failure-type"] === "direct"
          ? "The Direct SGP failed quorum, indicating insufficient validator interest. Developers can iterate and re-propose or build at their own risk."
          : "The SIMD-based proposal is re-converted to SIMD for optimistic implementation. Developers can iterate and re-propose or build at their own risk.",
      outcome: {
        type: "neutral",
        message:
          decisions["quorum-failure-type"] === "direct"
            ? "Insufficient signal for Direct SGP. Developers may iterate."
            : "Proposal re-converted to SIMD. Developers can proceed optimistically.",
      },
    },
    {
      id: "quorum-result",
      phase: "Phase 4",
      title: "Quorum Achieved!",
      description: "Quorum was met! Now we count the votes to determine if the proposal passes.",
      autoAdvance: true,
    },
    {
      id: "vote-count",
      phase: "Phase 4",
      title: "Vote Counting",
      description: "With quorum met, we now check if 'For' votes exceed 66% (supermajority).",
      choices: [
        { label: "For votes >= 66%", value: "passed" },
        { label: "For votes < 66%", value: "rejected" },
      ],
    },
    {
      id: "vote-rejection",
      phase: "Phase 4",
      title: "Proposal Rejected",
      description: "The proposal did not achieve consensus (66% supermajority) and is rejected.",
      outcome: {
        type: "failure",
        message: "Proposal rejected: Consensus not achieved.",
      },
    },
    {
      id: "vote-passed",
      phase: "Phase 4",
      title: "Proposal Passed!",
      description:
        "Your proposal achieved a supermajority (≥66%)! It now moves to social consensus where operators will implement the change.",
      outcome: {
        type: "success",
        message: "Proposal PASSED! Operators will implement the change through social consensus.",
      },
    },
  ]

  const getRelevantSteps = (): SimulatorStep[] => {
    const relevantSteps: SimulatorStep[] = []

    for (let i = 0; i <= currentStep; i++) {
      const step = steps[i]

      // Skip steps that don't match the current path
      if (step.id === "quorum-failure-type" && decisions["quorum-check"] !== "not-met") continue
      if (step.id === "quorum-failure-outcome" && decisions["quorum-check"] !== "not-met") continue
      if (step.id === "quorum-result" && decisions["quorum-check"] !== "achieved") continue
      if (step.id === "vote-rejection" && decisions["vote-count"] !== "rejected") continue
      if (step.id === "vote-passed" && decisions["vote-count"] !== "passed") continue

      relevantSteps.push(step)
    }

    return relevantSteps
  }

  const getNextStepIndex = (): number => {
    // Determine next step based on current decisions
    const currentId = steps[currentStep].id

    if (currentId === "start" && decisions["start"] === "strategic") {
      return steps.findIndex((s) => s.id === "find-sponsors")
    }

    if (currentId === "quorum-check") {
      if (decisions["quorum-check"] === "not-met") {
        return steps.findIndex((s) => s.id === "quorum-failure-type")
      } else {
        return steps.findIndex((s) => s.id === "quorum-result")
      }
    }

    if (currentId === "quorum-failure-outcome") {
      return steps.length // End simulation
    }

    if (currentId === "vote-count") {
      if (decisions["vote-count"] === "rejected") {
        return steps.findIndex((s) => s.id === "vote-rejection")
      } else {
        return steps.findIndex((s) => s.id === "vote-passed")
      }
    }

    if (currentId === "vote-rejection" || currentId === "vote-passed") {
      return steps.length // End simulation
    }

    // Default: move to next step
    return currentStep + 1
  }

  const currentStepData = steps[currentStep]

  const handleChoice = (value: string) => {
    setDecisions((prev) => ({ ...prev, [currentStepData.id]: value }))

    if (currentStepData.autoAdvance || currentStep === steps.length - 1) {
      if (currentStep === steps.length - 1) {
        setIsComplete(true)
      } else {
        setTimeout(() => {
          const nextIndex = getNextStepIndex()
          if (nextIndex >= steps.length) {
            setIsComplete(true)
          } else {
            setCurrentStep(nextIndex)
          }
        }, 100)
      }
    }
  }

  const handleNext = () => {
    if (currentStepData.autoAdvance) {
      const nextIndex = getNextStepIndex()
      if (nextIndex >= steps.length) {
        setIsComplete(true)
      } else {
        setCurrentStep(nextIndex)
      }
    } else if (decisions[currentStepData.id]) {
      if (currentStepData.outcome) {
        setIsComplete(true)
      } else {
        const nextIndex = getNextStepIndex()
        if (nextIndex >= steps.length) {
          setIsComplete(true)
        } else {
          setCurrentStep(nextIndex)
        }
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      // Clear all decisions from current step onwards
      const newStep = currentStep - 1
      setDecisions((prev) => {
        const newDecisions = { ...prev }
        // Clear decisions from current step onwards
        for (let i = currentStep; i < steps.length; i++) {
          delete newDecisions[steps[i].id]
        }
        return newDecisions
      })
      setIsComplete(false)
      setCurrentStep(newStep)
    }
  }

  const reset = () => {
    setCurrentStep(0)
    setDecisions({})
    setIsComplete(false)
  }

  const close = () => {
    setIsOpen(false)
    setTimeout(reset, 300)
  }

  const getOutcomeColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-50 border-green-200"
      case "failure":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-blue-600 bg-blue-50 border-blue-200"
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="gap-2 bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:opacity-90 text-white font-semibold"
      >
        Simulate Your Own Proposal
        <ArrowRight className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-[#14F195] to-[#9945FF] bg-clip-text text-transparent">
              Governance Proposal Simulator
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {!isComplete ? (
              <>
                {/* Progress indicator */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-gradient-to-r from-[#14F195]/10 to-[#9945FF]/10 rounded">
                    {currentStepData.phase}
                  </span>
                  <span>
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>

                {/* Step content */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">{currentStepData.title}</h3>
                  <p className="text-muted-foreground mb-6">{currentStepData.description}</p>

                  {/* Choices */}
                  {currentStepData.choices && (
                    <div className="space-y-3">
                      {currentStepData.choices.map((choice) => (
                        <button
                          key={choice.value}
                          onClick={() => handleChoice(choice.value)}
                          className={`w-full text-left p-4 border rounded-lg transition-colors ${
                            decisions[currentStepData.id] === choice.value
                              ? "border-[#14F195] bg-[#14F195]/5"
                              : "hover:border-[#14F195] hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {decisions[currentStepData.id] === choice.value && (
                              <Check className="h-5 w-5 text-[#14F195] flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className="font-medium">{choice.label}</div>
                              {choice.description && (
                                <div className="text-sm text-muted-foreground mt-1">{choice.description}</div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Outcome display */}
                  {currentStepData.outcome && (
                    <div className={`p-4 rounded-lg border ${getOutcomeColor(currentStepData.outcome.type)}`}>
                      <div className="flex items-start gap-3">
                        {currentStepData.outcome.type === "success" ? (
                          <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        ) : currentStepData.outcome.type === "failure" ? (
                          <X className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        ) : (
                          <ArrowRight className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <div className="font-semibold">
                            {currentStepData.outcome.type === "success"
                              ? "Success!"
                              : currentStepData.outcome.type === "failure"
                                ? "Proposal Ended"
                                : "Next Steps"}
                          </div>
                          <div className="text-sm mt-1">{currentStepData.outcome.message}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex gap-3 pt-4">
                  {currentStep > 0 && (
                    <Button onClick={handleBack} variant="outline">
                      Back
                    </Button>
                  )}
                  {(currentStepData.autoAdvance ||
                    decisions[currentStepData.id] ||
                    (!currentStepData.choices && !currentStepData.outcome)) && (
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-[#14F195] to-[#9945FF] hover:opacity-90 ml-auto"
                    >
                      {currentStep === steps.length - 1 || currentStepData.outcome ? "Finish" : "Continue"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-3">Simulation Complete!</h3>
                <p className="text-muted-foreground mb-6">
                  You've walked through the entire Solana governance proposal process. Understanding these steps is key
                  to participating in network governance.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={reset} variant="outline" className="gap-2 bg-transparent">
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                  </Button>
                  <Button onClick={close} className="bg-gradient-to-r from-[#14F195] to-[#9945FF] hover:opacity-90">
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
