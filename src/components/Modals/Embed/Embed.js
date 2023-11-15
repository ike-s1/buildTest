import React, { useRef } from "react";
import "./Embed.scss";
import Rodal from "rodal";
import copyIcon from "../../../resources/icons/icon-copy.svg";
import copy from "copy-to-clipboard";
import { toast } from 'react-toastify';


const id = 'id'

export const EmbedModal = ({ visible, handleClose }) => {

  const iframeElement = useRef();
  const scriptElement = useRef();

  function copyToClipboard(element) {
    const text = element.current.textContent;
    copy(text);
    toast.success("copied to clipboard")
  }

  return (
    <Rodal
      visible={visible}
      onClose={handleClose}
      showCloseButton={false}
      className="embed-modal-box"
      animation="fade"
      duration={500}
      closeOnEsc={true}
    >
      <div className="embed-modal">
        <div className="embed-content">
          <h3 className="domain-name">
          https://quantumchat.ai
          </h3>
          <div className="embed-iframe">
            <p className="embed-desc">
              To add the chatbot any where on your website, add this iframe to
              your html code
            </p>
            <div className="embed-block">
              <pre>
                <code ref={iframeElement}>{`<iframe
src="https://quantumchat.ai/chatbot-iframe/${id}
width="100%"
style="height: 100%; min-height: 700px"
frameborder="0"
></iframe>`}</code>
              </pre>
            </div>
            <div onClick={() => copyToClipboard(iframeElement)} className="copy-block">
              <span>Copy Iframe</span>
              <img src={copyIcon}  alt="icon" />
            </div>
          </div>
          <div className="embed-script">
            <p className="embed-desc">
              To add a chat bubble to the bottom right of your website add this
              script tag to your html
            </p>
            <div className="embed-block">
            <pre><code ref={scriptElement}>
            {`<script>
window.embeddedChatbotConfig = {
chatbotId:"${id}",
domain: "https://quantumchat.ai"
}
</script>
<script
src="https://quantumchat.ai/embedQuantum.min.js"
chatbotId="${id}"
domain="https://quantumchat.ai"
defer>
</script>`}
              </code></pre>
            </div>
            <div onClick={() => copyToClipboard(scriptElement)} className="copy-block">
              <span>Copy Script</span>
              <img src={copyIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </Rodal>
  );
};
