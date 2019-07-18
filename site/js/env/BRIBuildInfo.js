'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-18 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-155';
    this._commitGIT = '8183109fbf2e91969fbd664d03ce7a1f91082052';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}