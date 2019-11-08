'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-08 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-607';
    this._commitGIT = '4ad748a873ff9cbaa4fcba2b4802ab6f6f83ab9d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}