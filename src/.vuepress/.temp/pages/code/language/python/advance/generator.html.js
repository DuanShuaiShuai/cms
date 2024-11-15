import comp from "/Users/carson/Desktop/Mister-Hope.github.io-main/src/.vuepress/.temp/pages/code/language/python/advance/generator.html.vue"
const data = JSON.parse("{\"path\":\"/code/language/python/advance/generator.html\",\"title\":\"生成器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"生成器\",\"icon\":\"cycle\",\"author\":\"廖雪峰\",\"date\":\"2020-05-29T00:00:00.000Z\",\"category\":\"Python\",\"description\":\"通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。 所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢? 这样就不必创建完整的 li...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.com/code/language/python/advance/generator.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Hope\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"生成器\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。 所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢? 这样就不必创建完整的 li...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"廖雪峰\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-05-29T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"生成器\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-05-29T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"廖雪峰\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"小结\",\"slug\":\"小结\",\"link\":\"#小结\",\"children\":[]}],\"readingTime\":{\"minutes\":5.5,\"words\":1650},\"filePathRelative\":\"code/language/python/advance/generator.md\",\"localizedDate\":\"2020年5月29日\",\"excerpt\":\"<p>通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。</p>\\n<p>所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢? 这样就不必创建完整的 list，从而节省大量的空间。在 Python 中，这种一边循环一边计算的机制，称为生成器: generator。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
