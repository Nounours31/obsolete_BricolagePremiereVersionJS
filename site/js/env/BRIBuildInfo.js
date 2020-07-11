'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-11 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1593';
    this._commitGIT = 'c7072cead59fd23dfd621f9b90ace851361d2a88';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}