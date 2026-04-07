'use client';

import React from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  Node,
  Edge,
  Handle,
  Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// 自定義節點組件
const CustomNode = ({ data }: { data: any }) => {
  return (
    <div className="px-4 py-3 shadow-md rounded-md bg-white border-2 border-stone-400 max-w-[200px]">
      <div className="flex flex-col">
        <div className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
          {data.category}
        </div>
        <div className="text-sm font-semibold">{data.label}</div>
        <p className="text-[10px] text-gray-400 mt-1 line-clamp-2">{data.description}</p>
        
        {data.url && (
          <a 
            href={data.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 flex items-center text-[10px] text-blue-600 hover:underline"
          >
            查看資源 <ExternalLink className="w-2 h-2 ml-1" />
          </a>
        )}
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-stone-400" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-stone-400" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

interface RoadmapFlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

export default function RoadmapFlow({ initialNodes, initialEdges }: RoadmapFlowProps) {
  return (
    <div className="h-[600px] w-full border rounded-xl bg-slate-50 overflow-hidden">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#aaa" gap={20} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
