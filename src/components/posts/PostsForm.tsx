import { UserProps } from "@/types";
import { Button } from "..";
import { setPost } from "@/lib/setPost";
import { redirect } from "next/navigation";

const PostsForm: React.FC<UserProps> = ({ user }) => {
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await setPost(formData);
        }}
      >
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="w-full bg-primary-bg border-2 border-border-color rounded-md px-4 pt-[10px] pb-[9px]"
          />
        </div>
        <div>
          <label htmlFor="content" className="block">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            cols={5}
            rows={10}
            placeholder="Content"
            className="w-full bg-primary-bg border-2 border-border-color rounded-md px-4 pt-[10px] pb-[9px] resize-none"
          ></textarea>
        </div>
        <input type="hidden" name="userId" id="userId" value={user?.uid} />
        <Button title="Submit" buttonType="submit" />
      </form>
    </section>
  );
};

export default PostsForm;