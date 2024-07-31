import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-container h-screen">
      <h1>About Pokemon Dex</h1>
      <p>
        Welcome to <strong>Pokemon Dex</strong>, a comprehensive and interactive
        Pokémon database. This application is a group project created by{" "}
        <strong>Finjuni</strong> (Finta Julian Nicholas).
      </p>

      <h2>Project Overview</h2>
      <p>
        Pokemon Dex is designed to provide detailed information about all known
        Pokémon species. Our goal is to create a user-friendly platform where
        Pokémon enthusiasts can explore and learn more about their favorite
        Pokémon.
      </p>

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Search Functionality</strong>: Quickly find any Pokémon by
          name or ID.
        </li>
        <li>
          <strong>Detailed Information</strong>: Access in-depth details about
          each Pokémon.
        </li>
        <li>
          <strong>Interactive UI</strong>: Enjoy a seamless and engaging user
          experience with our intuitive interface.
        </li>
      </ul>

      <h2>API Source</h2>
      <p>
        This application leverages data from the{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          PokéAPI
        </a>
        . PokéAPI is a rich and comprehensive resource that provides up-to-date
        information on all Pokémon species, moves, abilities, and much more. By
        integrating PokéAPI, we ensure that Pokemon Dex remains accurate and
        current with the latest Pokémon data.
      </p>

      <h2>About Finjuni</h2>
      <p>
        Finjuni stands for <strong>Finta Julian Nicholas</strong>, a
        collaborative group dedicated to developing an useful Pokemon Dex
        application. Our mission is to combine our diverse skills and
        creativity to bring ideas to life and deliver valuable tools to our
        users.
      </p>

      <p>
        Thank you for using Pokemon Dex! We hope you enjoy exploring the
        wonderful world of Pokémon with our app.
      </p>
    </div>
  );
}
