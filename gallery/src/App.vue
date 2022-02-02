<template>
  <div id="app">

    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand to="/">MetArt</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>

            <!-- <b-nav-item-dropdown text="Factulties">
              <b-dropdown-item
                v-for="dep in departments"
                :key="dep.departmentId"
                :to="`/department/${dep.departmentId}/${dep.displayName}`">
                {{ dep.displayName }}
              </b-dropdown-item>
            </b-nav-item-dropdown> -->
            
          <b-nav-item-dropdown text="Categories" right>
            <b-nav-item to="/faculties">Faculties</b-nav-item>
            <b-nav-item to="/libraries">Libraries</b-nav-item>
        </b-nav-item-dropdown>
            
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <!-- <b-form-input v-model="searchQuery" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click="search" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
