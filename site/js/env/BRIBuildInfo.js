'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-28 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1171';
    this._commitGIT = 'bec62067f8cc2dbe165794da6e06d2b9552f9c21';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}