import React from 'react';

const userOutput = props => {
    return (
        <div>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula eu nisl faucibus accumsan. Phasellus maximus porttitor diam, ac pellentesque massa iaculis ac. Phasellus ipsum lectus, mollis eu orci vitae, lobortis accumsan ligula. In convallis facilisis ligula, et blandit diam lacinia in. Mauris commodo odio nec nunc sollicitudin, id hendrerit turpis aliquet. Ut in euismod purus. Duis gravida nunc nec eros auctor tincidunt. Cras et felis nec massa lobortis ornare.<cite>{props.name}</cite></blockquote>
            <blockquote>Pellentesque a nisi eu odio cursus volutpat. Mauris malesuada venenatis dolor vitae suscipit. Maecenas rutrum ultrices neque. Phasellus elit dolor, mollis eu erat a, hendrerit elementum arcu. Maecenas nec ligula ullamcorper, finibus massa non, mattis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque faucibus maximus quam et fringilla. Nulla ac purus nec enim sollicitudin condimentum. Ut ex tellus, commodo in facilisis eu, molestie sit amet est. Morbi sed scelerisque sapien. Sed ut euismod libero, sed iaculis arcu. Nullam auctor, augue et molestie iaculis, massa massa varius risus, id interdum nisl ligula id massa. Integer posuere iaculis convallis.<cite>{props.name}</cite></blockquote>
        </div>
    )
}

export default userOutput;