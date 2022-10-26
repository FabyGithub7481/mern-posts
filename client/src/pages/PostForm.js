import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    //wrapper para que se auto llame
    (async () => {
      if (params.id) {
        const data = await getPost(params.id);
        setPost(data);
      }
    })();
  });

  //console.log(params);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="felx justify-between items-center py-4 text-white">
          <h3 className="text-xl"> New Post</h3>
          <Link className="text-gray-400 text-sm hover:text-gray-300" to="/">
            Go Back
          </Link>
        </header>

        <Formik
          initialValues={post}
          /* initialValues={{
          title: "",
          description: "",
        }}*/
          validationSchema={yup.object({
            title: yup.string().required("Title is required"),
            description: yup.string().required("Description is required"),
          })}
          onSubmit={async (values, actions) => {
            // console.log(values)
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false)
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label
                className="text-sm block font-bold text-gray-400"
                htmlFor="title"
              >
                Title
              </label>
              <Field
                name="title"
                placeholder="title"
                className="px-3 py-2 focus: outline-none rounded bg-gray-600 text-white w-full mb-4"
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="title"
              />
              <label
                className="text-sm block font-bold text-gray-400"
                htmlFor="description"
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="description"
                className="px-3 py-2 focus: outline-none rounded bg-gray-600 text-white w-full"
                rows={3}
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="description"
              />
              <label
                className="text-sm block font-bold text-gray-400"
                htmlFor="description"
              >
                Description
              </label>
              <input
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full "
                type="file"
                name="image"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <button
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                type="submit"
                disabled={isSubmitting}
              >
              {isSubmitting?(
                <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
              ): 'Save'}
                
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
