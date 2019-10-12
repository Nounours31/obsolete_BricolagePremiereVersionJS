'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-12 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-499';
    this._commitGIT = 'bbb229432cffa99decb9861245fdd222a537d49a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}