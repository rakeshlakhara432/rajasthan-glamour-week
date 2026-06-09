package com.example.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.data.models.Event
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class HomeViewModel : ViewModel() {

    private val _events = MutableStateFlow<List<Event>>(emptyList())
    val events: StateFlow<List<Event>> = _events

    init {
        loadMockData()
    }

    private fun loadMockData() {
        viewModelScope.launch {
            _events.value = listOf(
                Event("1", "Gala Opening Night", "The grand opening of Rajasthan Glamour Week.", "2026-10-10", "19:00", "JW Marriott, Jaipur", "https://images.unsplash.com/photo-1539109132314-34a77bf4f489", "RUNWAY", isLive = true),
                Event("2", "Ethnic Fusion Walk", "Rajasthani heritage meets modern silhouettes.", "2026-10-11", "18:00", "City Palace, Jaipur", "https://images.unsplash.com/photo-1541099649105-f69ad21f3246", "DESIGNER"),
                Event("3", "Bridal Couture '26", "A showcase of the finest bridal wear.", "2026-10-12", "20:00", "Rambagh Palace, Jaipur", "https://images.unsplash.com/photo-1518281361980-b26bfd556770", "BRIDAL")
            )
        }
    }
}
