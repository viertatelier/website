import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
import Image from "next/legacy/image"

export const markdownOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong >{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => <em >{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u >{text}</u>,
    [MARKS.CODE]: (text) => (
      <code >{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p >{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 >{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 >{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 >{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 >{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 >{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 >{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul >{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol >{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li >{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <q >{children}</q>
    ),
    [BLOCKS.HR]: (node, children) => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <Image src={node.data.target.fields.file.url} alt="image" />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
      <div >{children}</div>
    ),
  },
}
