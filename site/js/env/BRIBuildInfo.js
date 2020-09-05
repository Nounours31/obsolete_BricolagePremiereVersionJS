'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-05 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1816';
    this._commitGIT = '1d7e895e33da77bea1e9db433a912f7d326708ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}