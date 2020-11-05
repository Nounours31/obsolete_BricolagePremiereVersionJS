'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-05 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-2062';
    this._commitGIT = '6d5cbdfae642d1907538c86c0bb09036f9de424f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}