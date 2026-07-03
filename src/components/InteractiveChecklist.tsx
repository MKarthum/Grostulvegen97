import React, { useState, useEffect } from "react";
import { CheckSquare, Square, ClipboardCheck, Trash2, ShieldAlert } from "lucide-react";
import { DepartureChecklist } from "../types";

interface InteractiveChecklistProps {
  checklist: DepartureChecklist;
  completedLabel: string;
}

export default function InteractiveChecklist({ checklist, completedLabel }: InteractiveChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("grostulvegen_checklist_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("grostulvegen_checklist_progress", JSON.stringify(checkedItems));
    } catch (e) {
      console.warn("Storage failed", e);
    }
  }, [checkedItems]);

  const toggleItem = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  const totalItems = checklist.items.length;
  const completedCount = checklist.items.filter((item) => checkedItems[item]).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  return (
    <div id="checklist-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-cabin-accent/15 pb-3">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">Departure</span>
          <h3 id="checklist-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
            {checklist.title}
          </h3>
        </div>
        
        {completedCount > 0 && (
          <button
            id="reset-checklist-btn"
            onClick={resetChecklist}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 hover:bg-white/5 active:scale-95 text-xs font-semibold text-text-light transition-all self-start sm:self-auto cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5 text-cabin-accent" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-text-light">
            {completedCount} av {totalItems} {completedLabel}
          </span>
          <span className="text-sm font-bold text-cabin-accent">{progressPercent}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-cabin-accent h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {checklist.items.map((item, idx) => {
          const isChecked = !!checkedItems[item];
          return (
            <button
              key={idx}
              id={`checklist-item-btn-${idx}`}
              onClick={() => toggleItem(item)}
              className={`w-full flex items-start text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                isChecked
                  ? "bg-white/3 border-white/5 text-text-dim"
                  : "bg-white/5 border-white/10 hover:border-cabin-accent/30 text-white shadow-sm hover:bg-white/8"
              }`}
            >
              <div className="mr-3 mt-0.5 shrink-0">
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-cabin-accent/50" />
                ) : (
                  <Square className="w-5 h-5 text-cabin-accent" />
                )}
              </div>
              <span className={`text-sm font-medium leading-relaxed ${isChecked ? "line-through text-text-dim" : ""}`}>
                {item}
              </span>
            </button>
          );
        })}
      </div>

      {/* Important Notice */}
      <div id="checklist-warning-box" className="mt-6 flex gap-3 p-4 bg-red-950/20 border border-red-900/30 rounded-2xl text-text-light text-sm leading-relaxed">
        <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-red-400 mb-0.5">Viktig / Important</p>
          <p className="text-slate-300 text-xs sm:text-sm">{checklist.importantNote}</p>
        </div>
      </div>
    </div>
  );
}
