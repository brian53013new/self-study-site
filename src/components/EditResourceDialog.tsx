'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Save, 
  Loader2,
  Video,
  FileText,
  Globe,
  PlayCircle,
  BookOpen
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  level: string;
  mediaType: string;
}

interface EditResourceDialogProps {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedResource: Resource) => Promise<void>;
}

export const EditResourceDialog = ({ resource, isOpen, onClose, onSave }: EditResourceDialogProps) => {
  const [formData, setFormData] = useState<Resource>({ ...resource });
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      alert('儲存失敗，請檢查網路連線或 GitHub Token');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold flex items-center">
            <Badge variant="outline" className="mr-2 bg-blue-50 text-blue-600 border-blue-200">編輯資源</Badge>
            {formData.title}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">標題</Label>
            <Input 
              id="title" 
              value={formData.title} 
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="例如: React 官方文件"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">描述</Label>
            <textarea 
              id="description" 
              className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.description} 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="簡短描述這個資源的內容..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">網址</Label>
            <Input 
              id="url" 
              value={formData.url} 
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level">難度分級</Label>
              <select 
                id="level"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              >
                <option value="Beginner">初學者 (Beginner)</option>
                <option value="Intermediate">進階者 (Intermediate)</option>
                <option value="Advanced">專家級 (Advanced)</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mediaType">媒體類型</Label>
              <select 
                id="mediaType"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                value={formData.mediaType}
                onChange={(e) => setFormData({ ...formData, mediaType: e.target.value })}
              >
                <option value="YouTube">YouTube</option>
                <option value="Article">文章 (Article)</option>
                <option value="Interactive">互動式 (Interactive)</option>
                <option value="Course">課程 (Course)</option>
                <option value="Tool">工具 (Tool)</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-3 pt-4 border-t">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose} disabled={isSaving}>
              取消
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  儲存中...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  儲存到 GitHub
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
