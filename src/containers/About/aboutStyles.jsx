import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 10rem 0 10rem 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 22rem;
  width: 950px;
`;

export const AboutImage = styled.div`
    height: 100%;
    max-height: 100%;
    min-width: 23rem;
    background-image: url("https://lh3.googleusercontent.com/fife/APg5EObIEM1NbhILEG_fypnC_T5AYzS8rdNRpGp56vnAU9c_HjCj3tDlPT5dpsznGgHxqJRi84B5Z02K21ySLRwVZBU5C_D0Chn5a-3g50SSMbiqnGsv9KQXsnlI3uOnyodMC8WPg3_y2M2gFKxo87t8V0LEbrwUbbch5ZWIqwdXx9f814o0hOMDg_OBWmq3GuLgYPFVf4lhK3yaIdVJZXMYTJC8Uqg-vNyNeiDRCL9mQN1GDUOoPvRk7js2jy41fE06b-zaTRQQY_jVzekqrhLbyo69k8BbsHVfuobv6jr45EjfTxLLEn0PipyciBPyalEFDEL32mVPtZM7PB8vu1EZK0V8uixjLEsr3PJoKnP9Z0LbIn5wOXfOuinYbt_QxySHS6YIbrRJRvZ0xpRO-xY6W7u8Z7ZbnXu7yJlodqZa6X4m0WhJUah8COVbBWJFb7wN4Urw88Jm8Db1bZs56XrBAPesqz1o6qlwM4kBGACKDLoMaNN5SQgfT9_LqpXaMCcNSBwCNGdeM-RmIwAGYwPyOSaAuO37rMBBvY1jJA2J63EeZWlOmdJbRsUd8KNkJM7cF1ZhIykhG3UK9u7knzpUOwOirSDEGbzHhQS4KkiBZTe8r2ANaTvIcmtweq-V8DrPaUDFdo8G-dWsdmYDs5pRlJZYVTkg8M-kGje307blo1xOd7ytEKmM3vWFaq4gt5UZW-yEVAl25tR480yTfsQDvvLOalIdmGwmptUwdyAQNyOmXQDb75dvbSUKxWEotKbyPGMyEKp3fu43rOulWtptarMMHS-F4X7_LWRICW5RXdMXFo8qSLgxZRBRMZxukadW1n_0F-ubJ7737t4iDKsCZ5J4Vl96Ce-a_3tStOOyBRlBCwkxuzHSTwZFTfLaugR3X0DhS8NOVIynzdM3aAaBpKMvSNb0GZNC0Q24dONXY4WME8qHaBe0EAAc547-Z5HKc5QmfZ1MfKaVxsBb_kBF_mu-xMCgCyrDm3QxYnCiK8umGc2wDKJJvh16odDpoXnE58fXlgKzCE3VaRujXsRbRdGcRk9fOMi7Gl1rxTgMm_B5SjzhOB1q-KrFg5LP1OX4Ym0IM4rutcxJZTzoVYlYS9D8sRPIeWf_s9FlGonuO6QOQO4n7ovVGqGEzlVhwg6tVAW7ELM0YXKpuC7WVzrBVOg6RZTFlZG8nxcGZOizYDBwNtSJxG4-NkiFIYBP2oIb_nKGFfpAffdrlaiEnjZMafuYih2OxRol9bd2rZ_x1qhScV4xApvq0PMUdRTCuVIEn0cO5hL4Cdf0XsaTVt-9YlI5cshpI-wSBGYfqDcKDYEXUVRhrJzERogx5Z2DlBpuoKj2pd8hH7SKua7I5LhymUzhUiIN956iY4QZtmYSK7tWFNRRsfg1AZQLTP3RZydEbeQeSeyFtEw88Ock-nS6FjekFQG-_7xlloIyjhR5dcCz_tuGaDB4VrrLxt2lOhAQxdGDz9RGEt10r9uxx9y6acgW-AifJwtLBTjZMtB0Aiku3mNb758IwAXajbykWg=w1920-h937");
    border-radius: 15px;
    background-size: cover;
`;

export const AboutText = styled.div`
    margin-left: 5rem;

    h4 {
        color: #147efb;
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    h3 {
        font-size: 1.5rem;
        margin: 0;
    }

    p{
        color: #767676;
        font-family: Mulish, sans-serif;
        font-size: 1.21rem;
        font-weight: 500;
        line-height: 1.4;
    }
`