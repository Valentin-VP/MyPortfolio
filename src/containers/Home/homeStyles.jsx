import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 950px;
  height: 490px;
  position: relative;
`;

export const Main = styled.div`
  width: 950px;
  height: 350px;
  display: flex;
  gap: 130px;
  justify-content: flex-start;
  position: relative;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 470px;
`;

export const Title = styled.h1`
  line-height: 3.8rem;
  font-size: 3.5rem;
  margin-bottom: 0;
`;
export const SubText = styled.p`
  font-size: 1.2rem;
  color: #767676;
  font-weight: 500;

  img {
    object-fit: contain;
    width: 2.8rem;
    vertical-align: middle;
    margin-left: 0.5rem;
  }
`;

export const Socials = styled.div`
  vertical-align: top;
  a {
    margin-right: 10px;
  }
`;

export const MainPic = styled.div`
  @keyframes Morph {
    0%,
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    25% {
      border-radius: 40% 70% 70% 40% / 50% 60% 45% 60%;
    }

    50% {
      border-radius: 70% 30% 60% 40% / 60% 30% 70% 40%;
    }

    75% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  animation: Morph 10s ease-in-out infinite;
  background-image: url("https://lh3.googleusercontent.com/fife/APg5EOa570ldvcqjRICYj-WAMRDJJhHjRZzb14o-od-wzdp0nq04EFCZDwU9gwK69C7pZxCqUtu09DPTBHIAIstPUywVXOH0KNZbo1bwv2SvOAAvx7VxxLijp_WTjeTDPuLI7SOV1DO2BHlrfvn4whsD1BFSzYwpjHaTopcDQeXsO7pqcfEX0ktj8zqHBHqfVkdP86R_y_FayL-HNgQUsGMwIB6eDluni2jZlHQy0SFUlalgT7Umz_NuTwInT85_KvdhrPPOlasgL06dAVCniXapo8Bl1QtaR5i8myT0ujbgUN3wC_BKru4Yv5kQWWWzMaOLZ6rW_86D-D7kUL32X6lJTBFSKSdOBJ4g_roWVEw09t4lDVb4GsbPfdoOIzZ__ZRkifRmUfccxPZYcfBnBgNMCjKO__Ni9g4tgGfXq_yAD7oqc89ulaDEUPve12o-kQLlO29l9kUP1ejVxRrzPBP3-cM4YfhLTIxPJySLb3wkaWD0M5QFnLc7gi81w-KxWBN-OyPV9Q3A-MbZdS2NSj1WQ6cIAzXkaWo023e4_9y51DrNfjuhN4sSTO9zAHvIeniyPfoyhrEWGiDwKdK2Iq4Jm5KmO4slJdvjhqc6DaHijkZTxZxow0s-iprZDkrTdb1dxlGUpq5n_v9fL_NxRV2Uv-FMWkn8nHXiVlshvtgHJpF_lsah61SMHWjrjBfNTbw3jhUb_4ndVXxiO5paFf2nbRqAuXpTuU4EUd9YIKKSiZI2TG6KIIlCR2epq5A3sLji2GOqG9QbBsegw6Jx_Yz1T5SsBOUU9jtPbszBQlV0qogRqYzBCebdpCQRWxsieiMJHBQ2l2W-UgIV4LnIHWdwfH3ym_wp0mQkopeJ1H7wjiKW9iTVG8c8Zm0_MX81NfNWSICZfkfLdk5KQ2ShQHB14Wlk6j_KxdFtCttLa_QvnNHdWBdhgj1xvvDkehBjfCERJpMB6vBXCkheN1TMnbh4NSa9UskgBzWudD9APB3ldJk6uguoQNQDGoeCzBooDsxCUyOGOYIiBTyyFI_Kb2mxq1AODi59yrGUFBmfZcITTgkXQ-hrXDt2X_05hZxuQSr_ctkKNYHqO6A1mU2tJpbKyNVgpFURipGfyYPsEhx_vyDWdymEj2gjwHCKnnDV7XGDaAjN5WJljvZlcgs2eHI3C3hlwQAUdWSRfVneb_1ymCIN3ZqsbiwTFn3ABSenbiyUHWiPW4xoDxu-zm4BgmuC7RgaArmrzTOPERrxNFUg75kFPG_rXNSeCsLzqUdOgfe5TEIC6hYcoughs5BG1um9WajeOrM218httRjZeDkaEUhEXKFaccHeDStm78mMxj_ZK-KEHbBCkfacQ18zXugSQKulPO19v8nGqKWSoUHMZuGpgtDUWRg_oAJDrd4NHlaFJC6-AHMCpG_peTITFaNsmI4zXaW8gL-cXbnIqmfto35_woHFPrQ2TZBGF_ycW3rgTH4B1RokhCvnsnu-WtLK2kcs71A7jZvXgpivVWJ4ojkyzVZc_AdpO6f3QFfFhA=w1920-h937");
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  width: 350px;
  height: 350px;
  transform: scale(1.1);
`;

export const Techs = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1.2rem;

  p {
    border-right: 3px solid #2d2e32;
    font-family: Mulish, sans-serif;
    font-weight: 600;
    padding-right: 1rem;
    margin-right: 3rem;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;
