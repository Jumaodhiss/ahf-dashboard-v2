import React from 'react';

class TablesIcon extends React.Component {

    render() {
        return (
          <svg className={this.props.className} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 15.8333H10.8333V8.33333H15.8333V15C15.8333 15.46 15.4592 15.8333 15 15.8333ZM4.16667 15V8.33333H9.16667V15.8333H5C4.54083 15.8333 4.16667 15.46 4.16667 15ZM5 4.16667H15C15.4592 4.16667 15.8333 4.54 15.8333 5V6.66667H4.16667V5C4.16667 4.54 4.54083 4.16667 5 4.16667ZM15 2.5H5C3.62167 2.5 2.5 3.62167 2.5 5V7.34833V7.65167V15C2.5 16.3783 3.62167 17.5 5 17.5H15C16.3783 17.5 17.5 16.3783 17.5 15V7.65167V7.34833V5C17.5 3.62167 16.3783 2.5 15 2.5Z" />
            <mask id="tables" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="16">
              <path fillRule="evenodd" clipRule="evenodd" d="M15 15.8333H10.8333V8.33333H15.8333V15C15.8333 15.46 15.4592 15.8333 15 15.8333ZM4.16667 15V8.33333H9.16667V15.8333H5C4.54083 15.8333 4.16667 15.46 4.16667 15ZM5 4.16667H15C15.4592 4.16667 15.8333 4.54 15.8333 5V6.66667H4.16667V5C4.16667 4.54 4.54083 4.16667 5 4.16667ZM15 2.5H5C3.62167 2.5 2.5 3.62167 2.5 5V7.34833V7.65167V15C2.5 16.3783 3.62167 17.5 5 17.5H15C16.3783 17.5 17.5 16.3783 17.5 15V7.65167V7.34833V5C17.5 3.62167 16.3783 2.5 15 2.5Z" />
            </mask>
            <g mask="url(#tables)">
              <rect width="20" height="20" />
            </g>
          </svg>
        );
    }
}

export default TablesIcon;
