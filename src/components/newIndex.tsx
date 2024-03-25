import { useState } from "react";
import { EuiButton, EuiCheckbox, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHorizontalRule, EuiIconTip, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui"

type NewIndexProps = {
  onChange: (name: string) => void;
  onDataViewChange: (value: boolean) => void;
  onEnrichmentChange: (value: boolean) => void;
}

export const NewIndex: React.FC<NewIndexProps> = ({ onChange, onDataViewChange, onEnrichmentChange }) => {
  const [createDataView, setCreateDataView] = useState<boolean>(false);
  const [allowEnrichment, setAllowEnrichment] = useState<boolean>(false);
  const [indexName, setIndexName] = useState<string>('');

  const handleDataViewChange = () => {
    setCreateDataView(!createDataView);
    onDataViewChange(!createDataView);
  }

  const handleEnrichmentChange = () => {
    setAllowEnrichment(!allowEnrichment);
    onEnrichmentChange(!allowEnrichment);
  }

  const replaceSpecialCharsAndSpaces = (str: string) => {
    return str.replace(/[^a-zA-Z0-9]/g, '-');
  }

  const handleIndexNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = replaceSpecialCharsAndSpaces(e.target.value)
    setIndexName(name);
    onChange(name);
  }

  return (
    <EuiFlexGroup direction="column">
      <EuiFlexItem>
        <EuiPanel>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiFlexGroup gutterSize="xs" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiTitle size="xs">
                    <h2>Create your first index</h2>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiIconTip
                    type="questionInCircle"
                    content="An index is a collection of documents that have similar characteristics. For example, you might have an index for logs, another for user data, and another for product data."
                    position="bottom"
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow
                label="Index name"
                helpText="Your index name should be lowercase and may include a hyphen."
                fullWidth
              >
                <EuiFieldText value={indexName} onChange={handleIndexNameChange} fullWidth />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow>
              <EuiFormRow>
                <EuiCheckbox
                  checked={createDataView}
                  onChange={handleDataViewChange}
                  id="createIndex"
                  label="Also create a data view"
                />
              </EuiFormRow>
              <EuiFormRow>
                <EuiCheckbox
                  checked={allowEnrichment}
                  onChange={handleEnrichmentChange}
                  id="createIndex"
                  label="Enable inference and enrichment"
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiButton fill>Create index</EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  )
}
