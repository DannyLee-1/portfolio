export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: { Row: { id: string; display_name: string | null; role: string | null; interest: string | null; proof_url: string | null; proof_summary: string | null; betting_intent: "equity" | "paid" | null; verification_status: "not-started" | "pending" | "approved"; created_at: string; updated_at: string }; Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & { id: string }; Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>; Relationships: [] };
      projects: { Row: { id: string; owner_id: string; idea: string; title: string | null; summary: string | null; status: string; regeneration_count: number; created_at: string; updated_at: string }; Insert: Partial<Database["public"]["Tables"]["projects"]["Row"]> & { owner_id: string; idea: string }; Update: Partial<Database["public"]["Tables"]["projects"]["Row"]>; Relationships: [] };
      notifications: { Row: { id: string; user_id: string; title: string; detail: string; href: string | null; read_at: string | null; created_at: string }; Insert: Partial<Database["public"]["Tables"]["notifications"]["Row"]> & { user_id: string; title: string; detail: string }; Update: Partial<Database["public"]["Tables"]["notifications"]["Row"]>; Relationships: [] };
      events: { Row: { id: string; user_id: string | null; event_name: string; metadata: Json; created_at: string }; Insert: Partial<Database["public"]["Tables"]["events"]["Row"]> & { event_name: string }; Update: Partial<Database["public"]["Tables"]["events"]["Row"]>; Relationships: [] };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
