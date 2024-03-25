import { useState } from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import { EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiPanel, EuiProvider, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import { NewIndex } from './components/newIndex';
import { NewIndexCodePanel } from './components/newIndexCodePanel';

function App() {
  const [indexName, setIndexName] = useState<string>('');
  const [createDataView, setCreateDataView] = useState<boolean>(false);
  const [createEnrichment, setCreateEnrichment] = useState<boolean>(false);

  return (
    <EuiProvider colorMode='light'>
      <EuiFlexGroup direction="column" alignItems="center" style={{ padding: '3rem', maxWidth: 1024, margin: 'auto' }}>
        <EuiFlexItem>
          <EuiTitle>
            <h1>Welcome to Elastic Search</h1>
          </EuiTitle>
          <EuiSpacer size="l" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <NewIndex
                onChange={(name: string) => setIndexName(name)}
                onDataViewChange={(value: boolean) => setCreateDataView(value)}
                onEnrichmentChange={(value: boolean) => setCreateEnrichment(value)}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <NewIndexCodePanel
                createDataView={createDataView}
                createEnrichment={createEnrichment}
                indexName={indexName}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem style={{ width: '100%' }}>
          <EuiPanel paddingSize="l" hasBorder>
            <EuiText size="m" textAlign="center">
              <h3>Up next</h3>
              <p>Configure your first ingestion method to import and sync data</p>
            </EuiText>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default App;
