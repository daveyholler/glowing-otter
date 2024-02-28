import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiText } from '@elastic/eui';
import { IngestBuilder } from './components/ingestBuilder';

function App() {

  return (
    <EuiProvider colorMode='light'>
      <IngestBuilder />
    </EuiProvider>
  );
}

export default App;
