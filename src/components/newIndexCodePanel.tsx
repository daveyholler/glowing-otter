import { EuiButton, EuiButtonEmpty, EuiCodeBlock, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiPanel, EuiProvider, EuiSplitPanel, EuiText, EuiThemeProvider, EuiTitle } from "@elastic/eui";

type NewIndexCodePanelProps = {
  indexName: string;
  createDataView: boolean;
  createEnrichment: boolean;
}

export const NewIndexCodePanel: React.FC<NewIndexCodePanelProps> = ({
  createDataView,
  createEnrichment,
  indexName
}) => {
  const codeBlock = `PUT /_index/${indexName || '<YOUR_INDEX_NAME>'} \n\n{ \n  "query": { \n    "\${exampleVariable2}": {} \n  } \n}`;
  const dataBlock = `\n\nPUT /_dataview/${indexName ? indexName + '_dataview' : '<YOUR_INDEX_NAME>'} \n\n{ \n  "query": { \n    "\${exampleVariable2}": {} \n  } \n}`;
  const enrichmentBlock = `\n\nPUT /_inference/ \n\n{ \n  "query": { \n    "\${exampleVariable2}": {} \n  } \n}`;
  return (
    <EuiThemeProvider colorMode='dark' wrapperProps={{ cloneElement: true }}>
      <EuiSplitPanel.Outer hasBorder>
        <EuiSplitPanel.Inner>
          <EuiFlexGroup alignItems="center" style={{ width: '100%' }} justifyContent="spaceBetween">
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h2>What it looks like in code</h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                size="s"
                iconType="visVega"
                iconSide="right"
                color="primary"
              >
                Try in Console
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiSplitPanel.Inner>
        <EuiSplitPanel.Inner color="plain">
          <EuiCodeBlock language="graphql">
            {codeBlock}
            {createDataView && dataBlock}
            {createEnrichment && enrichmentBlock}
          </EuiCodeBlock>
        </EuiSplitPanel.Inner>
      </EuiSplitPanel.Outer>
    </EuiThemeProvider>
  )
}
