document.querySelector('#branches')
    .addEventListener('change', event => {
        fetch(`http://localhost:8000/search?branch_id=${event.target.value}`)
            .then(res => res.json())
            .then(data => {
                renderAds(data);
            })
            .catch(err => console.log(err));
    })

function renderAds(ads) {
    const grid = document.querySelector("#ads-grid");
    grid.innerHTML = '';
    ads.map(ad => {
        grid.innerHTML +=
            `
    <div
                        class="ad group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div class="relative">
                            <img src="{{(new \\App\\Actions\\DisplayAdImage())($ad)}}" alt="">
                            <div class="absolute top-4 end-4">
                                <form action="/ads/{{ $ad->id }}/bookmark" method="post">
                                    @csrf
                                    <button type="submit"
                                            class="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full {{$ad->bookmarked ? 'text-red-600 dark:text-red-600' : 'text-slate-100 dark:text-slate-100'}} focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
                                        <i data-feather="bookmark" class="text-[20px]"></i></button>
                                </form>
                            </div>
                        </div>

                        <div class="p-6">
                            <div class="pb-6">
                                <a href="/ads/{{ $ad->id }}"
                                   class="ad_title text-lg hover:text-green-600 font-medium ease-in-out duration-500">${ad.title}</a>
                            </div>

                            <ul class="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                <li class="flex items-center me-4">
                                    <i data-feather="map" class="text-2xl me-2 text-green-600"></i>
                                    <span>{{$ad->branch->name}}</span>
                                </li>

                                <li class="flex items-center me-4">
                                    <i data-feather="user" class="text-2xl me-2 text-green-600"></i>
                                    <span>{{$ad->gender}}</span>
                                </li>

                                <li class="flex items-center">
                                    <i data-feather="home" class="text-2xl me-2 text-green-600"></i>
                                    <span>{{$ad->rooms}}</span>
                                </li>
                            </ul>

                            <ul class="pt-6 flex justify-between items-center list-none">
                                <li>
                                    <p class="text-lg font-medium"><span class="text-slate-400">Narxi:</span>
                                        $ {{ $ad->price }}</p>
                                </li>

                            </ul>
                        </div>
                    </div><!--end property content-->
    `
    })

}
