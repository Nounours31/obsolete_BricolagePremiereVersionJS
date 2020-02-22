'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-22 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1032';
    this._commitGIT = '2a798cf040c5eb8cf9fb33c04ad7353828a39914';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}