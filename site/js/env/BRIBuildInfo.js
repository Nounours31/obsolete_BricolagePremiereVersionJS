'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-02 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1555';
    this._commitGIT = '75e918c1fb42989e7afcd6ab2b1850c68bc7255b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}