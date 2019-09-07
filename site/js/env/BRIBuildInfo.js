'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-359';
    this._commitGIT = 'a6034d5c3bfa36f507697a0f958fa7fc50248bf0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}