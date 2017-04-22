> 在vue中如何检测data里面数值的变化

```

<template>
    <div>
    <input v-model="allDays"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allDays: 0,
        };
    },
    watch: {
        allDays: {
            handler: function (val, oldVal) {
                console.log('a thing changed', val, oldVal);
            },
            deep: true,
        },
    },
};
</script>
```