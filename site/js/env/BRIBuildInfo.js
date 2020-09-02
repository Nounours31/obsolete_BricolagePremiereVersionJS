'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-02 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1805';
    this._commitGIT = '5fc5f1fe738bbe9eb3f06b55aac13c87ac11087e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}