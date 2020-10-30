'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-30 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2038';
    this._commitGIT = '79326d41b2e8aab50e608f09fada06bbc7c7a36c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}