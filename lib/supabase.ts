import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
);
export async function uploadImage(image: File) {
  console.log("3------------");
  const timestamp = Date.now();
  const newName = `images/${timestamp}-${image.name}`;
  const { error } = await supabase.storage
    .from("main-bucket")
    .upload(newName, image, { cacheControl: "3600" });
  if (error) console.log(error, "---------------");
  if (error) throw error;
  return supabase.storage.from("main-bucket").getPublicUrl(newName).data
    .publicUrl;
}
