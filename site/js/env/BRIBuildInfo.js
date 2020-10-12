'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-12 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1966';
    this._commitGIT = '11a53f436a7fb857d51a2db7d3fce32b5a3ec537';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}