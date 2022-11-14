import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://qwstccdypwvxfkjzpizs.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3c3RjY2R5cHd2eGZranpwaXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NTM5MzEsImV4cCI6MTk4NDAyOTkzMX0.kcRxnckP1vlrPdaCu63MU9qLlktM8iTJD1zDIKP94nI";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}