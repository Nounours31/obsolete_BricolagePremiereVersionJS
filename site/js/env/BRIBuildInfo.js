'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-04 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-350';
    this._commitGIT = 'f0f0870b7c7aa134a02af8cbf2424db984515fb2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}