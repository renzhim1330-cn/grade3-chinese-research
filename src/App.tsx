import React, { useState } from 'react';
import { HeaderSection } from './components/HeaderSection';
import { ExperimentSection } from './components/ExperimentSection';
import { ThreeTierModelSection } from './components/ThreeTierModelSection';
import { ControlBar } from './components/ControlBar';
import { InspectionModal } from './components/InspectionModal';
import { PromptLibraryModal } from './components/PromptLibraryModal';
import {
  EXPERIMENT_GROUP_1,
  EXPERIMENT_GROUP_2,
  ExperimentGroup,
  ExperimentItem
} from './data';

export default function App() {
  const [showRedAnnotations, setShowRedAnnotations] = useState(true);
  const [selectedInspection, setSelectedInspection] = useState<{
    item: ExperimentItem;
    group: ExperimentGroup;
  } | null>(null);
  const [isPromptGuideOpen, setIsPromptGuideOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleInspectImage = (item: ExperimentItem, group: ExperimentGroup) => {
    setSelectedInspection({ item, group });
  };

  return (
    <div className="min-h-screen bg-[#f3efe6] py-4 sm:py-8 px-2 sm:px-4 flex flex-col items-center">
      {/* Top Floating Control Bar (Hidden when printing) */}
      <ControlBar
        showRedAnnotations={showRedAnnotations}
        onToggleRedAnnotations={() => setShowRedAnnotations(!showRedAnnotations)}
        onPrint={handlePrint}
        onOpenPromptGuide={() => setIsPromptGuideOpen(true)}
      />

      {/* Main A4 Standard Study Sheet & Poster Container with Bento Framing */}
      <main
        id="a4-research-sheet"
        className="bento-sheet max-w-4xl w-full p-4 sm:p-7 md:p-8 relative transition-all"
      >
        {/* Top 10%: Header & Hypothesis Bento */}
        <HeaderSection />

        {/* Middle 65%: Dual-Track Experiment Group 1 & Group 2 */}
        <div className="space-y-4 my-4" id="experiment-core-zone">
          {/* Experiment Group 1: 泊船瓜洲 */}
          <ExperimentSection
            group={EXPERIMENT_GROUP_1}
            showRedAnnotations={showRedAnnotations}
            onInspectImage={handleInspectImage}
          />

          {/* Experiment Group 2: 荷花 */}
          <ExperimentSection
            group={EXPERIMENT_GROUP_2}
            showRedAnnotations={showRedAnnotations}
            onInspectImage={handleInspectImage}
          />
        </div>

        {/* Bottom 25%: Three-Tier Model & Conclusion */}
        <ThreeTierModelSection />
      </main>

      {/* Lightbox / Zoom Inspection Modal */}
      {selectedInspection && (
        <InspectionModal
          item={selectedInspection.item}
          group={selectedInspection.group}
          onClose={() => setSelectedInspection(null)}
          onSelectAnotherItem={(newItem) =>
            setSelectedInspection({ item: newItem, group: selectedInspection.group })
          }
        />
      )}

      {/* Full Prompt Library Modal */}
      <PromptLibraryModal
        isOpen={isPromptGuideOpen}
        onClose={() => setIsPromptGuideOpen(false)}
      />
    </div>
  );
}
