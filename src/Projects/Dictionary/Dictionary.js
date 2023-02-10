import { Container } from '@mui/system'
import React, {useState} from 'react'
import Header from './Component/Header/Header'


function Dictionary() {
    const [input, setInput] = useState("");

    return (
        <div style={{ background: '#067597', color: '#fff', height: '100vh' }}>
            <Container
                maxWidth="md"
                style={{ diaplay: 'flex', flexDirection: 'column', height: '100vh' }}
            >

                <Header input={input} setInput={setInput} />
                <Definitions meanings={meanings} word={input} />

            </Container>

        </div>
    )
}

export default Dictionary