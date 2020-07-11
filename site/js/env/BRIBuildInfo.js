'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-11 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1594';
    this._commitGIT = 'acafff7ddd4d8808daaed8f7c31c3aa242a37dc9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}