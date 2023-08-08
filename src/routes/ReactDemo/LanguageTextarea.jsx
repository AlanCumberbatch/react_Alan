import {nanoid} from "nanoid";// 用于创建随机的id
import Button from "../../UIComponent/Button"
import ShowLog from "./ShowLog"
import { useState } from "react";
import MouseTracker from "../../UIComponent/MouseTracker"

// import { HiAcademicCap,HiArrowPath } from "react-icons/hi";
// arrow-path



// import {generateAndSaveMarkdown} from "../../utilities/SaveAsMarkdown"
function LanguageTextarea(props) {
  const imageUrl = props.imageUrl;
  const data = props.data;
  const onSave = props.onSave;

  const postTextAreaId = "languageBox";
  const [showDialog, setShowDialog] = useState(false);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log('%c [ formJson ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', formJson)

    // // generateAndSaveMarkdown()
    if (formJson.postContent) {
      onSave([...data, {
        id: nanoid(),
        img: imageUrl,
        english:formJson.postContent
      }])
    }
  }

  const CheckFn = () => {
    console.log('%c [ props.data ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', props.data)
    setShowDialog(true)
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit} className="h-full ">
        <div className="relative flex flex-col text-start p-[15px] h-full">
          {/* <label htmlFor={postTextAreaId}> Write your answer: </label> */}
          <textarea
            className='bg-white border-2 rounded-md h-full p-[2px] hover:border-2'
            id={postTextAreaId}
            name="postContent"
            rows={20}
            cols={40}
            defaultValue="Yours words:"
          />
          {/* 鼠标点击后旋转，弹窗菜单； 选中菜单中的某一项之后，旋转并关闭菜单 */}
          <MouseTracker className=" absolute bottom-[12px] right-[10px]">
            <div className="w-[40px] h-[40px] flex items-center justify-center font-[20px] rounded-full bg-grey-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
              </svg>
            </div>
          </MouseTracker>
          {/* onClick={refreshImage}  */}

        </div>
        {/* <Button type="reset">Reset edits</Button> */}
        {/* <Button type="submit" >Save</Button> */}
        {/* <Button type="reset" onClick={CheckFn}>查看</Button> */}
      {/* {showDialog && <ShowLog />} */}
      </form>
    </>
  )
} export default LanguageTextarea;