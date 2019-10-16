'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-16 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-515';
    this._commitGIT = 'c34e31bd40b32ff3f3ce6a3cc698e8275dfea5d9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}