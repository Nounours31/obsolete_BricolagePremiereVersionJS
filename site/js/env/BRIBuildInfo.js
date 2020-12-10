'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-10 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2200';
    this._commitGIT = 'a534dfe8e55132cc7001db4106d9c6c234c67e8e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}