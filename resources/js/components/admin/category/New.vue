<template>
    <section class="content">
        <div class="container-fluid">
            <div class="card card-primary" >
                <div class="card-header">
                    <h3 class="card-title">New category</h3>
                </div>
                 <form role="form" @submit.prevent="addCategory()">
                    <div class="card-body">
                    <div class="form-group">
                        <label for="cat_name">Category name</label>
                        <input type="text"
                            id="cat_name"
                            class="form-control"
                            name="cat_name"
                            v-model="form.cat_name"
                            :class="{ 'is-invalid': form.errors.has('cat_name') }"
                            placeholder="Add new category name">
                        <has-error :form="form" field="cat_name"></has-error>    
                    </div>
                    </div>

                    <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Add category</button>
                    </div>
                </form>
            </div>   
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
    export default {
        name: "New",
        data(){
            return {
                form: new Form({
                    cat_name:''
                })
            }
        },
        methods:{
            addCategory(){
                this.form.post('/add-category')
                    .then((response)=>{
                       this.$router.push('/category-list')
                        toast.fire({
                            type: 'success',
                            title: 'Category Added successfully'
                        });
                    })
                    .catch(()=>{
                    })
            }
        }
    }
</script>

<style scoped>
</style>