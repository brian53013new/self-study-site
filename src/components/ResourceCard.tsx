'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Video, FileText, Globe, PlayCircle, BookOpen, Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAdmin } from "@/lib/AdminContext";
import { EditResourceDialog } from "./EditResourceDialog";
import { saveResource } from "@/app/actions";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  url: string;
  level: string;
  mediaType: string;
  likesCount?: number;
}

const getMediaIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'youtube': return <Video className="w-4 h-4 mr-1 text-red-500" />;
    case 'article': return <FileText className="w-4 h-4 mr-1 text-blue-500" />;
    case 'interactive': return <Globe className="w-4 h-4 mr-1 text-green-500" />;
    case 'course': return <PlayCircle className="w-4 h-4 mr-1 text-purple-500" />;
    default: return <BookOpen className="w-4 h-4 mr-1" />;
  }
};

const getLevelBadge = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner': return <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">初學者</Badge>;
    case 'intermediate': return <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">進階者</Badge>;
    case 'advanced': return <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-100">專家</Badge>;
    default: return null;
  }
};

export const ResourceCard = ({ id, title, description, url, level, mediaType, likesCount }: ResourceCardProps) => {
  const { isAdmin } = useAdmin();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleSave = async (updatedResource: any) => {
    const success = await saveResource(updatedResource);
    if (!success) throw new Error('儲存失敗');
  };

  return (
    <>
      <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-2 relative group/card">
        {isAdmin && (
          <button 
            className="absolute top-2 right-2 p-2 bg-white/90 shadow-sm border rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-blue-50 text-blue-600 z-10"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-2">
            {getLevelBadge(level)}
            <div className="flex items-center text-xs text-muted-foreground bg-gray-50 px-2 py-1 rounded">
              {getMediaIcon(mediaType)}
              <span>{mediaType}</span>
            </div>
          </div>
          <CardTitle className="text-xl line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-sm line-clamp-3 mb-4">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-0 flex justify-between items-center">
          {likesCount !== undefined && (
            <span className="text-xs text-muted-foreground">{likesCount} 人推薦</span>
          )}
          <a 
            href={url} 
            target={url.startsWith('/') ? '_self' : '_blank'} 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "ml-auto group")}
          >
            前往資源
            <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </CardFooter>
      </Card>

      <EditResourceDialog 
        resource={{ id, title, description, url, level, mediaType }}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSave={handleSave}
      />
    </>
  );
};
