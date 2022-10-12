import styled from "styled-components";

export const DropdownIcon = styled.img``;
export const ItemDropDown = styled.a`
  display: block;
  text-decoration: none;
  text-align: left;
  
  color: #474747;
  
  padding: 6px 0px;
  
  font-size: 0.8em;
  font-weight: 600;

  &:hover {
    color: #0007ae;
  }
`;
export const ButtonText = styled.span`
  padding: 5px;
  color: #0007ae;
  font-size: 0.8em;
  font-weight: 600;
`;

export const DropdownList = styled.div`
  position: absolute;
  display: none;
  z-index: 1;

  background-color: #f9f9f9;
  color: #0007ae;

  min-width: 115px;
  margin: 15px 0px;
  padding: 5px 16px;
  left: 0px;

  border-radius: 10px;
  border: 2px solid blue;
  box-shadow: 0px 4px 4px 0px #0000005a;
`;
export const DropdownButton = styled.button`
  display: inline-block;
  position: relative;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;

  color: #0007ae;
  background: white;

  min-width: 115px;
  padding: 8px 12px;

  border: 2px solid #141dff;
  border-radius: 10px;

  &:focus {
    display: block;
    background: white;
    padding: 8px 12px;
    border: 2px solid #0007ae;

    ${DropdownList} {
      display: block;
    }
  }
`;
