import { Formik, Form, Field } from "formik";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";

export function PostForm() {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" placeholder="title" />
            <Field name="description" placeholder="description" />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
