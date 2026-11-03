export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  email: string;
}

export interface FollowUpFormData {
  leadName: string;
  followUpType: string;
  priority: string;
  date: string;
  time: string;
  reminder: string;
  notes: string;
  ownerId: string;
}