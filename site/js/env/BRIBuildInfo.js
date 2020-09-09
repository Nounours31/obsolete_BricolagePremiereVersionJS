'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-09 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1833';
    this._commitGIT = '4474c2236c0c06f30b160863911a81a548b21b36';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}