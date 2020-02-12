'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-12 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-994';
    this._commitGIT = 'b15c0d057aa20337c077a729c885cf61ba34f49b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}