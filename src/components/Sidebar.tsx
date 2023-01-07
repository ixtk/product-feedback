import { BaseContainer } from "components/BaseContainer"
import { Tag } from "components/Tag"

const TAG_OPTIONS = ["All", "UI", "UX", "Enhancement"]

export const Sidebar = () => {
  const tagElements = TAG_OPTIONS.map(tagOptionText => {
    return <Tag text={tagOptionText} key={tagOptionText} />
  })

  return (
    <BaseContainer classExtension="flex flex-wrap gap-2">
      {tagElements}
    </BaseContainer>
  )
}
